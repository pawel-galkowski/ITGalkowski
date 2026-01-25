
import React, { useState, useRef } from "react";
import { Box, TextField, Button, Typography, CircularProgress, Fade } from "@mui/material";
import { motion } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";
import { useLanguage } from "@/context/LanguageContext";
import { useTranslations } from "@/i18n";
import { FormState, FormErrors, initialState } from "@/components/contact-form/ContactForm.types";
import { validate } from "@/components/contact-form/utils";
import { formBoxStyles, textFieldStyles, buttonStyles, buttonBoxStyles } from "@/components/contact-form/ContactForm.styles";

export const contactFormTestIds = {
  root: "contact-form-root",
  name: "contact-form-name",
  email: "contact-form-email",
  message: "contact-form-message",
  recaptcha: "contact-form-recaptcha",
  actions: "contact-form-actions",
  submit: "contact-form-submit",
  loading: "contact-form-loading",
};

const ContactForm: React.FC = () => {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const { language } = useLanguage();
  const { t } = useTranslations(language);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;
    setSubmitting(true);
    setErrorMsg("");
    setSuccess(false);
    try {
      // Get reCAPTCHA token
      const recaptchaToken = await recaptchaRef.current?.executeAsync();
      recaptchaRef.current?.reset();
      if (!recaptchaToken) {
        setErrorMsg("reCAPTCHA validation failed");
        setSubmitting(false);
        return;
      }
      // Send to API route (serverless function)
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, recaptchaToken }),
      });
      if (res.ok) {
        setSuccess(true);
        setValues(initialState);
      } else {
        const data = await res.json();
        setErrorMsg(data.error || "Something went wrong");
      }
    } catch (err) {
      console.error("Error submitting contact form:", err);
      setErrorMsg(
        err instanceof Error
          ? `Network error: ${err.message}`
          : "Network error"
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={formBoxStyles}
        data-testid={contactFormTestIds.root}
      >
        <TextField
          label={t("contact.nameLabel")}
          name="name"
          value={values.name}
          onChange={handleChange}
          error={!!errors.name}
          helperText={errors.name}
          required
          slotProps={{
            input: {
              "aria-label": t("contact.nameLabel"),
              autoComplete: "off",
            },
            inputLabel: {
              style: { color: "#fff" },
            },
          }}
          sx={textFieldStyles}
          data-testid={contactFormTestIds.name}
        />
        <TextField
          label={t("contact.emailLabel")}
          name="email"
          value={values.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
          required
          slotProps={{
            input: {
              "aria-label": t("contact.emailLabel"),
              autoComplete: "off",
            },
            inputLabel: {
              style: { color: "#fff" },
            },
          }}
          sx={textFieldStyles}
          data-testid={contactFormTestIds.email}
        />
        <TextField
          label={t("contact.messageLabel")}
          name="message"
          value={values.message}
          onChange={handleChange}
          error={!!errors.message}
          helperText={errors.message}
          required
          multiline
          minRows={4}
          slotProps={{
            input: {
              "aria-label": t("contact.messageLabel"),
              autoComplete: "off",
            },
            inputLabel: {
              style: { color: "#fff" },
            },
          }}
          sx={textFieldStyles}
          data-testid={contactFormTestIds.message}
        />
        {process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ? (
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
            size="invisible"
            data-testid={contactFormTestIds.recaptcha}
          />
        ) : (
          <Typography color="error.main">
            reCAPTCHA site key is missing. Please set NEXT_PUBLIC_RECAPTCHA_SITE_KEY in your
            environment.
          </Typography>
        )}
        <Box sx={buttonBoxStyles} data-testid={contactFormTestIds.actions}>
          <Button
            type="submit"
            variant="contained"
            disabled={submitting}
            sx={buttonStyles}
            aria-label={t("contact.sendButton")}
            data-testid={contactFormTestIds.submit}
          >
            {submitting ? <CircularProgress size={24} color="inherit" data-testid={contactFormTestIds.loading} /> : t("contact.sendButton")}
          </Button>
          <Fade in={!!success} unmountOnExit>
            <Typography color="success.main">{t("contact.sendButton")}</Typography>
          </Fade>
          <Fade in={!!errorMsg} unmountOnExit>
            <Typography color="error.main">{errorMsg}</Typography>
          </Fade>
        </Box>
      </Box>
    </motion.div>
  );
};

export default ContactForm;

import React, { useState, useRef } from "react";
import { Box, TextField, Button, Typography, CircularProgress, Fade } from "@mui/material";
import { motion } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";
import { useLanguage } from "@/context/LanguageContext";
import { useTranslations } from "@/i18n";

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const initialState: FormState = {
  name: "",
  email: "",
  message: "",
};

const validate = (values: FormState): FormErrors => {
  const errors: FormErrors = {};
  if (!values.name.trim()) {
    errors.name = "Name is required";
  }
  if (!values.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.message.trim()) {
    errors.message = "Message is required";
  }
  return errors;
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
      setErrorMsg("Network error");
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
        sx={{ mx: "auto", display: "flex", flexDirection: "column", gap: 2 }}
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
              style: { color: "#fff" },
              "aria-label": t("contact.nameLabel"),
              autoComplete: "off",
            },
            inputLabel: {
              style: { color: "#fff" },
            },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "primary.contrastText",
              },
              "&:hover fieldset": {
                borderColor: "primary.contrastText",
              },
              "&.Mui-focused fieldset": {
                borderColor: "primary.contrastText",
              },
              color: "primary.contrastText",
              backgroundColor: "transparent",
            },
            "& .MuiInputLabel-root": {
              color: "primary.contrastText",
            },
            "& .MuiFormHelperText-root": {
              color: "primary.contrastText",
            },
          }}
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
              style: { color: "#fff" },
              "aria-label": t("contact.messageLabel"),
              autoComplete: "off",
            },
            inputLabel: {
              style: { color: "#fff" },
            },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "primary.contrastText",
              },
              "&:hover fieldset": {
                borderColor: "primary.contrastText",
              },
              "&.Mui-focused fieldset": {
                borderColor: "primary.contrastText",
              },
              color: "primary.contrastText",
              backgroundColor: "transparent",
            },
            "& .MuiInputLabel-root": {
              color: "primary.contrastText",
            },
            "& .MuiFormHelperText-root": {
              color: "primary.contrastText",
            },
          }}
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
              style: { color: "#fff" },
              "aria-label": t("contact.messageLabel"),
              autoComplete: "off",
            },
            inputLabel: {
              style: { color: "#fff" },
            },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "primary.contrastText",
              },
              "&:hover fieldset": {
                borderColor: "primary.contrastText",
              },
              "&.Mui-focused fieldset": {
                borderColor: "primary.contrastText",
              },
              color: "primary.contrastText",
              backgroundColor: "transparent",
            },
            "& .MuiInputLabel-root": {
              color: "primary.contrastText",
            },
            "& .MuiFormHelperText-root": {
              color: "primary.contrastText",
            },
          }}
        />
        {process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ? (
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
            size="invisible"
          />
        ) : (
          <Typography color="error.main">
            reCAPTCHA site key is missing. Please set NEXT_PUBLIC_RECAPTCHA_SITE_KEY in your
            environment.
          </Typography>
        )}
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 2 }}>
          <Button
            type="submit"
            variant="contained"
            disabled={submitting}
            sx={{
              color: "primary.contrastText",
              backgroundColor: "transparent",
              border: "2px solid",
              borderColor: "primary.contrastText",
              boxShadow: "none",
              fontWeight: 700,
              fontSize: "1.1rem",
              transition: "background 0.2s, color 0.2s",
              "&:hover, &:focus": {
                backgroundColor: "primary.contrastText",
                color: "primary.main",
                outlineOffset: "2px",
              },
            }}
            aria-label={t("contact.sendButton")}
          >
            {submitting ? <CircularProgress size={24} color="inherit" /> : t("contact.sendButton")}
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

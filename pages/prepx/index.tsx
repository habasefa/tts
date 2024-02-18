import React, { useEffect, useState } from 'react'
import Router, { useRouter } from 'next/router'
import Header from '@/components/Common/Header'
import Footer from '@/components/Common/Footer'

import {
  Avatar,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Alert,
  Box,
  Button,
  Tabs,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  Tab,
  Typography,
  Grid,
  MenuItem,
  InputLabel,
  Select,
  OutlinedInput,
  Chip,
} from '@mui/material'
// import { sendMessage } from '../backend-utils/tutor-utils'

const PrivacyPolicy = () => {
  return (
    <Container>
      <Box mt={4}>
        <Typography variant="h4" align="center" gutterBottom>
          Privacy Policy for Prepx
        </Typography>
        <Typography variant="subtitle1" align="center" gutterBottom>
          Effective Date: February 18, 2024
        </Typography>
        <Typography variant="h6" paragraph>
          Introduction
        </Typography>
        <Typography variant="body1" paragraph>
          This Privacy Policy describes how Temaribet ("we", "us", or "our")
          collects, uses, and discloses your personal information when you use
          our mobile application, Prepx ("App").
        </Typography>
        <Typography variant="h6" paragraph>
          Information We Collect
        </Typography>
        <Typography variant="body1" paragraph>
          We collect the following information from you:
        </Typography>
        <Typography variant="body1" paragraph>
          - Account Information: When you create an account, we collect your
          name, phone number, gender, grade, and date of birth (optional).
        </Typography>
        <Typography variant="body1" paragraph>
          - Location Information: We collect your approximate location based on
          your IP address or GPS (optional).
        </Typography>
        <Typography variant="body1" paragraph>
          - Usage Information: We collect information about your use of the App,
          such as the textbooks you list, the questions you ask the chatbot, and
          your reading progress.
        </Typography>
        <Typography variant="body1" paragraph>
          - Device Information: We collect information about your device, such
          as its operating system, model, and unique identifiers.
        </Typography>
        <Typography variant="body1" paragraph>
          - Analytics: We use Firebase Analytics to collect usage data to
          understand how users interact with the App and improve its
          functionality.
        </Typography>
        <Typography variant="h6" paragraph>
          How We Use Your Information
        </Typography>
        <Typography variant="body1" paragraph>
          We use your information for the following purposes:
        </Typography>
        <Typography variant="body1" paragraph>
          - To provide and operate the App and its features, including the
          chatbot functionality.
        </Typography>
        <Typography variant="body1" paragraph>
          - To personalize your experience by suggesting relevant textbooks and
          content.
        </Typography>
        <Typography variant="body1" paragraph>
          - To improve the App and develop new features.
        </Typography>
        <Typography variant="body1" paragraph>
          - To analyze how users interact with the App.
        </Typography>

        <Typography variant="body1" paragraph>
          - To comply with legal obligations and enforce our policies.
        </Typography>
        <Typography variant="h6" paragraph>
          Sharing Your Information
        </Typography>
        <Typography variant="body1" paragraph>
          We do not share your personal information with third parties except in
          the following cases:
        </Typography>
        <Typography variant="body1" paragraph>
          - With service providers who help us operate the App, such as cloud
          storage providers and analytics providers. These service providers are
          bound by contractual obligations to keep your information confidential
          and secure.
        </Typography>
        <Typography variant="body1" paragraph>
          - With law enforcement or other government officials if required by
          law.
        </Typography>

        <Typography variant="h6" paragraph>
          Data Retention
        </Typography>
        <Typography variant="body1" paragraph>
          We will retain your personal information for as long as your account
          is active or as needed to provide you with the services. We will also
          retain your information for as long as necessary to comply with legal
          obligations, resolve disputes, and enforce our policies.
        </Typography>
        <Typography variant="h6" paragraph>
          Security
        </Typography>
        <Typography variant="body1" paragraph>
          We take reasonable measures to protect your personal information from
          unauthorized access, disclosure, alteration, or destruction. However,
          no method of transmission over the internet or electronic storage is
          100% secure.
        </Typography>
        <Typography variant="h6" paragraph>
          Your Choices
        </Typography>
        <Typography variant="body1" paragraph>
          You can access, or update your personal information by logging into
          your profile settings.
        </Typography>
        <Typography variant="h6" paragraph>
          Children's Privacy
        </Typography>
        <Typography variant="body1" paragraph>
          We do not knowingly collect personal information from children under
          the age of 13. If you are a parent or guardian and you learn that your
          child has provided us with personal information, please contact us.
        </Typography>
        <Typography variant="h6" paragraph>
          Changes to this Privacy Policy
        </Typography>
        <Typography variant="body1" paragraph>
          We may update this Privacy Policy from time to time. We will notify
          you of any changes by posting the new Privacy Policy on this page. You
          are advised to review this Privacy Policy periodically for any
          changes.
        </Typography>
        <Typography variant="h6" paragraph>
          Contact Us
        </Typography>
        <Typography variant="body1" paragraph>
          If you have any questions about this Privacy Policy, please contact us
          at{' '}
          <Link href="mailto:nazrihabtish@gmail.com">
            nazrihabtish@gmail.com
          </Link>
        </Typography>
        {/* Email link goes here: nazrihabtish@gmail.com*/}
      </Box>
    </Container>
  )
}

const About = () => {
  const router = useRouter()

  return (
    <>
      <div className="h-screen overflow-y-scroll bg-gray-50   font-minionPro scrollbar-hide">
        <Header />
        <div className="mt-16 px-10 xl:px-16">
          <div className="my-2 p-3 md:p-5">
            <PrivacyPolicy />
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default About

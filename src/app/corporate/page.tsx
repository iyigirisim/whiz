"use client";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  Input,
  Textarea,
  FormErrorMessage,
  FormControl,
  FormLabel,
  Flex,
  Box,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

interface FormType {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const initialValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  phone: Yup.string().required("Required"),
  message: Yup.string().required("Required"),
});

export default function Page() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const router = useRouter();

  const onSubmit = async (values: FormType) => {
    setIsSubmitting(true);
    try {
      // const response = await axios.post("/api/contact", values);
      setIsSubmitted(true);
      // router.push("/contact/thank-you");
    } catch (error) {
      console.log(error);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="h-full px-8 lg:px-16 py-4 flex justify-center items-center">
      <div className="h-2/3 w-1/2 bg-secondary rounded-2xl p-4 border-b-4 border border-black">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form className="flex flex-col w-full justify-center items-center">
            <Field name="name">
              {({ field, form }: any) => (
                <FormControl
                  isInvalid={form.errors.name && form.touched.name}
                  mb={4}
                >
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <Input {...field} id="name" placeholder="Name" />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="email">
              {({ field, form }: any) => (
                <FormControl
                  isInvalid={form.errors.email && form.touched.email}
                  mb={4}
                >
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input {...field} id="email" placeholder="Email" />
                  <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="phone">
              {({ field, form }: any) => (
                <FormControl
                  isInvalid={form.errors.phone && form.touched.phone}
                  mb={4}
                >
                  <FormLabel htmlFor="phone">Phone</FormLabel>
                  <Input {...field} id="phone" placeholder="Phone" />
                  <FormErrorMessage>{form.errors.phone}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="message">
              {({ field, form }: any) => (
                <FormControl
                  isInvalid={form.errors.message && form.touched.message}
                  mb={4}
                >
                  <FormLabel htmlFor="message">Message</FormLabel>
                  <Textarea {...field} id="message" placeholder="Message" />
                  <FormErrorMessage>{form.errors.message}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Flex>
              <Box flex="1" textAlign="right">
                <Button
                  mt={4}
                  className="bg-primary hover:bg-tertiary text-secondary rounded-lg"
                  isLoading={isSubmitting}
                  type="submit"
                >
                  Submit
                </Button>
              </Box>
            </Flex>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

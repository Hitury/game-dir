import React from "react";
import {Form, Input, Select, SelectItem, Checkbox, Button} from "@heroui/react";

export default function App() {
  const [password, setPassword] = React.useState("");
  const [submitted, setSubmitted] = React.useState(null);
  const [errors, setErrors] = React.useState<Record<string, string | undefined>>({});

  // Real-time password validation
  const getPasswordError = (value: string) => {
    if (value.length < 4) {
      return "Password must be 4 characters or more";
    }
    if ((value.match(/[A-Z]/g) || []).length < 1) {
      return "Password needs at least 1 uppercase letter";
    }
    if ((value.match(/[^a-z]/gi) || []).length < 1) {
      return "Password needs at least 1 symbol";
    }

    return null;
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));

    // Custom validation checks
    const newErrors: Record<string, string | undefined> = {};

    // Password validation
    const passwordError = getPasswordError(typeof data.password === "string" ? data.password : "");

    if (passwordError) {
      newErrors.password = passwordError;
    }

    // Username validation
    if (data.name === "admin") {
      newErrors.name = "Nice try! Choose a different username";
    } 
    else if (data.name === "IJvadeli") {
      newErrors.name = "You shall not pass!!";
    }
    else if (data.name === "ijvadeli") {
      newErrors.name = "Lowercase won't work either...";
    }
    else if (data.name === "Hitury") {
      newErrors.name = "Filthy name stealer!";
    }
    else if (data.name === "hitury") {
      newErrors.name = "Lowercase, really?";
    }
    else if (data.name === "Akshay Lautan") {
      newErrors.name = "You are creepy...";
    }
    else if (data.name === "akshay lautan") {
      newErrors.name = "Lowercase won't save you...";
    }
    else if (data.name === "IJsbrand van de Lindt") {
      newErrors.name = "Stalker...";
    }
    else if (data.name === "ijsbrand van de lindt") {
      newErrors.name = "Don't bother...";
    }
    else if (data.name === "Kanker") {
      newErrors.name = "Daar mag je niet mee schelden he? FF normaal doen...";
    }
    else if (data.name === "kanker") {
      newErrors.name = "Je weet toch dat dat niet mag he...";
    }


    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);

      return;
    }

    if (data.terms !== "true") {
      setErrors({terms: "Please accept the terms"});

      return;
    }

    // Clear errors and submit
    setErrors({});
    setSubmitted(data);
  };

  return (
    <Form
      className="w-full justify-center items-center space-y-4"
      validationErrors={errors}
      onReset={() => setSubmitted(null)}
      onSubmit={onSubmit}
    >
      <div className="flex flex-col gap-4 max-w-md">
        <Input
          isRequired
          errorMessage={({validationDetails}) => {
            if (validationDetails.valueMissing) {
              return "Please enter your name";
            }

            return errors.name;
          }}
          label="Name"
          labelPlacement="outside"
          name="name"
          placeholder="Enter your name"
        />

        <Input
          isRequired
          errorMessage={({validationDetails}) => {
            if (validationDetails.valueMissing) {
              return "Please enter your email";
            }
            if (validationDetails.typeMismatch) {
              return "Please enter a valid email address";
            }
          }}
          label="Email"
          labelPlacement="outside"
          name="email"
          placeholder="Enter your email"
          type="email"
        />

        <Input
          isRequired
          errorMessage={getPasswordError(password)}
          isInvalid={getPasswordError(password) !== null}
          label="Password"
          labelPlacement="outside"
          name="password"
          placeholder="Enter your password"
          type="password"
          value={password}
          onValueChange={setPassword}
        />

        <Select
          isRequired
          label="Country"
          labelPlacement="outside"
          name="country"
          placeholder="Select country"
        >
          <SelectItem key="ar">Argentina</SelectItem>
          <SelectItem key="us">United States</SelectItem>
          <SelectItem key="ca">Canada</SelectItem>
          <SelectItem key="uk">United Kingdom</SelectItem>
          <SelectItem key="au">Australia</SelectItem>
          <SelectItem key="nl">Netherlands</SelectItem>
        </Select>

        <Checkbox
          isRequired
          classNames={{
            label: "text-small",
          }}
          isInvalid={!!errors.terms}
          name="terms"
          validationBehavior="aria"
          value="true"
          onValueChange={() => setErrors((prev) => ({...prev, terms: undefined}))}
        >
          I agree to the terms and conditions
        </Checkbox>

        {errors.terms && <span className="text-danger text-small">{errors.terms}</span>}

        <div className="flex gap-4">
          <Button className="w-full" color="primary" type="submit">
            Submit
          </Button>
          <Button type="reset" variant="bordered">
            Reset
          </Button>
        </div>
      </div>

      {submitted && (
        <div className="text-small text-default-500 mt-4">
          Data: <pre>{JSON.stringify(submitted, null, 2)}</pre>
        </div>
      )}
    </Form>
  );
}
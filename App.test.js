import { render, screen } from '@testing-library/react';
import App from './App';
import Registration from "./pages/auth/Registration";
import UserLogin from "./pages/auth/UserLogin";
import SendPasswordResetEmail from "./pages/auth/SendPasswordResetEmail";
import ChangePassword from './pages/auth/ChangePassword';

test('renders login page', () => {
  render(<UserLogin />);
  const linkElement = screen.getByTestId("comp");
  expect(linkElement).toBeInTheDocument();
  expect(screen.getByRole("heading")).toHaveTextContent(/Log In/);
  expect(screen.getByRole("button", { name: "Email address" })).toBeInTheDocument;
  expect(screen.getByRole("button", { name: "Password" })).not.toBeDisabled();
});


test('renders SendResetPasswordEmail', () => {
  render(<SendPasswordResetEmail />);
  const linkElement = screen.getByTestId("SendPasswordResetEmail");
  expect(linkElement).toBeInTheDocument();
  expect(screen.getByRole("heading")).toHaveTextContent(/Homepage/);
  expect(screen.getByRole("button", { name: "Reset Password" })).toBeInTheDocument;

});

test('Change password and its components', () => {
  render(<ChangePassword/>);
 const linkElement = screen.getByTestId("ChangePassword");
 expect(linkElement).toBeInTheDocument();
 expect(screen.getByRole("heading")).toHaveTextContent(/ChangePassword/);
 expect(screen.getByRole("button", { name: "update" })).not.toBeDisabled();
 const inputNode = screen.getByPlaceholderText(' New password');
 expect(inputNode).toBeInTheDocument();
 const inputNode2 = screen.getByPlaceholderText('Confirm New Password');
 expect(inputNode2).toBeInTheDocument();

});

test('renders Register page and its components', () => {
   render(<Registration/>);
  const linkElement = screen.getByTestId("signup");
  expect(linkElement).toBeInTheDocument();
  expect(screen.getByRole("heading")).toHaveTextContent(/Register/);
  expect(screen.getByRole("button", { name: "Register" })).not.toBeDisabled();
  const inputNode = screen.getByPlaceholderText(' Name');
  expect(inputNode).toBeInTheDocument();
  const inputNode2 = screen.getByPlaceholderText('E-mail Address');
  expect(inputNode2).toBeInTheDocument();
  const inputNode3= screen.getByPlaceholderText('Password');
  expect(inputNode3).toBeInTheDocument();
  const inputNode4= screen.getByPlaceholderText('Confirm Password');
  expect(inputNode3).toBeInTheDocument();

});

test('renders View Home Page', () => {
  render(<Home />);
  const linkElement = screen.getByTestId("view");
  expect(linkElement).toBeInTheDocument();
  expect(screen.getByRole("heading")).toHaveTextContent(/Home/);
 
});

test('renders Contact Page', () => {
  render(<Contact />);
  const linkElement = screen.getByTestId("view");
  expect(linkElement).toBeInTheDocument();
  expect(screen.getByRole("heading")).toHaveTextContent(/Contact/);
  expect(screen.getByRole("img")).toBeInTheDocument();
 
});

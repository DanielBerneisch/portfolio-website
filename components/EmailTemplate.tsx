interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message,
}) => (
  <div>
    <h1>Neq request from {name}!</h1>
    <p>
      <strong>Email:</strong> {email}
    </p>
    <p>
      <strong>Message:</strong> {message}
    </p>
  </div>
);

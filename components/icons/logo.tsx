export const Logo = ({ className }: { className?: string }) => (
  <img
    src="/save1.png" // Ensure the image is in the public folder
    alt="Logo"
    className={className}
    style={{
      width: "60px", // Adjust the width as needed
      height: "60px", // Adjust the height as needed
    }}
  />
);

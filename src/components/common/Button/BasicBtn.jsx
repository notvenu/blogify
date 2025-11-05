import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicBtn({
    children,
    color="inherit",
    type="button",
    textColor = "text-white",
    className = "",
    ...props
}) {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" className={`${color} ${type} ${textColor} ${className}`} {...props}>{children}</Button>
    </Stack>
  );
}

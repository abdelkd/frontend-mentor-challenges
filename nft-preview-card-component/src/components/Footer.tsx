const Footer = () => {
  // styles can be applied using variable object
  let attributionStyles: React.CSSProperties = { fontSize: '11px', textAlign: 'center' };

  return (
    <footer style={attributionStyles}>
      Challenge by
      <a
        href='https://www.frontendmentor.io?ref=challenge'
        target='_blank'
        style={{ color: 'hsl(228, 45%, 44%)' }}
      >
        Frontend Mentor
      </a>
      . Coded by <a href='#'>Abdelkarim Djelalda</a>.
    </footer>
  );
};

export default Footer;

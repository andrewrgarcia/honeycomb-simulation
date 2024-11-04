// components/Footer.js
export default function Footer() {
  return (
    <footer style={{ textAlign: 'center', padding: '1em', fontSize: '0.9em', color: '#555' }}>
      © {(new Date().getFullYear())} Andrew R. Garcia. This site was generated using 
      <a href="https://github.com/andrewrgarcia/files-here-wzrd/tree/main/make" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '4px', color: 'orange', textDecoration: 'none' }}>
        MakeFilesHere</a> from <a href="https://github.com/andrewrgarcia/files-here-wzrd" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '4px', color: 'orange', textDecoration: 'none' }}>files-here-wzrd</a> and ChatGPT. View the generated code on <a href="https://github.com/andrewrgarcia/honeycomb-simulation" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '4px', color: 'orange', textDecoration: 'none' }}>GitHub</a>.
    </footer>
  );
}

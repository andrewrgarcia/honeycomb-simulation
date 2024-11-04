// components/Footer.js
export default function Footer() {
    return (
      <footer style={{ textAlign: 'center', padding: '1em', fontSize: '0.9em', color: '#555' }}>
        © {(new Date().getFullYear())} Andrew R. Garcia. Created using 
        <a href="https://example.com" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '4px', color: 'orange', textDecoration: 'none' }}>
          MakeFilesHere</a> from <a href="https://example.com" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '4px', color: 'orange', textDecoration: 'none' }}>files-here-wzrd</a> and ChatGPT.
      </footer>
    );
  }
  
// components/Footer.js
export default function Footer() {
    return (
      <footer style={{ textAlign: 'center', padding: '1em', fontSize: '0.9em', color: '#555' }}>
        © {(new Date().getFullYear())} Andrew R. Garcia. Created using 
        <a href="https://github.com/andrewrgarcia/files-here-wzrd/blob/main/MakeFilesHere.sh" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '4px', color: 'orange', textDecoration: 'none' }}>
          MakeFilesHere</a> from <a href="https://github.com/andrewrgarcia/files-here-wzrd" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '4px', color: 'orange', textDecoration: 'none' }}>files-here-wzrd</a> and ChatGPT.
      </footer>
    );
  }
  
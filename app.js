const App = () => {
    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            padding: '20px',
        },
        logo: {
            fontSize: '120px',
            fontWeight: 'bold',
            marginBottom: '40px',
            letterSpacing: '10px',
        },
        message: {
            fontSize: '18px',
            marginBottom: '10px',
            textAlign: 'center',
        },
        credit: {
            fontSize: '14px',
            marginBottom: '30px',
            color: '#333',
        },
        linksContainer: {
            display: 'flex',
            gap: '20px',
            flexWrap: 'wrap',
            justifyContent: 'center',
        },
        link: {
            textDecoration: 'none',
            color: 'black',
            padding: '10px 20px',
            border: '2px solid black',
            borderRadius: '5px',
            fontSize: '16px',
            fontWeight: '500',
            transition: 'all 0.3s ease',
            display: 'inline-block',
        },
        linkHover: {
            backgroundColor: 'black',
            color: 'white',
        }
    };

    const [hoveredLink, setHoveredLink] = React.useState(null);

    return (
        <div style={styles.container}>
            <div style={styles.logo}>KF</div>
            <p style={styles.message}>This site is under construction</p>
            <p style={styles.credit}>Created by KF</p>
            <div style={styles.linksContainer}>
                <a 
                    href="https://github.com/kaif11ali" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                        ...styles.link,
                        ...(hoveredLink === 'github' ? styles.linkHover : {})
                    }}
                    onMouseEnter={() => setHoveredLink('github')}
                    onMouseLeave={() => setHoveredLink(null)}
                >
                    GitHub
                </a>
                <a 
                    href="https://linkedin.com/in/kaif11ali" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                        ...styles.link,
                        ...(hoveredLink === 'linkedin' ? styles.linkHover : {})
                    }}
                    onMouseEnter={() => setHoveredLink('linkedin')}
                    onMouseLeave={() => setHoveredLink(null)}
                >
                    LinkedIn
                </a>
                <a 
                    href="https://instagram.com/kaif11alii" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                        ...styles.link,
                        ...(hoveredLink === 'instagram' ? styles.linkHover : {})
                    }}
                    onMouseEnter={() => setHoveredLink('instagram')}
                    onMouseLeave={() => setHoveredLink(null)}
                >
                    Instagram
                </a>
            </div>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

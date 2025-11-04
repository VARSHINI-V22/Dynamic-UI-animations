import React, { useState, useEffect, useRef } from "react";
import heroBg from "../assets/herobg.jpg";

const HomePage = () => {
  const redirectToSite = () => {
    window.open("https://www.brington.in/", "_blank");
  };

  // Sample data with only two rows, but more values in each
  const rows = [
    { 
      id: 1, 
      values: ['73', '89', '102', '95', '101', '+115'], 
      label: 'Sample Numbers Row No.1' 
    },
    { 
      id: 2, 
      values: ['71', '81', '+81', '63', '77', '88'], 
      label: 'Sample Numbers Row No.2' 
    }
  ];

  const [scrollPosition, setScrollPosition] = useState(0);
  const dataSectionRef = useRef(null);

  // Handle window scroll event to move data horizontally
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      setScrollPosition(scrollPosition);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate animation values based on scroll position
  const calculateTransform = (rowId) => {
    // Row 1 moves left, Row 2 moves right
    const direction = rowId === 1 ? 1 : -1;
    return `translateX(${direction * (scrollPosition - window.innerHeight) * 2}px)`;
  };

  const calculateScale = (index = 0) => {
    return Math.max(0.9, 1 - Math.abs((scrollPosition - window.innerHeight - index * 100) * 0.001));
  };

  const calculateOpacity = (index = 0) => {
    return Math.max(0.7, 1 - Math.abs((scrollPosition - window.innerHeight - index * 100) * 0.001));
  };

  // Calculate background color based on scroll position
  const calculateBackgroundColor = () => {
    const scrollProgress = Math.min(1, Math.max(0, (scrollPosition - window.innerHeight) / 500));
    
    const r1 = Math.round(255 - (255 - 255) * scrollProgress);
    const g1 = Math.round(230 - (230 - 240) * scrollProgress);
    const b1 = Math.round(230 - (230 - 245) * scrollProgress);
    
    const r2 = Math.round(255 - (255 - 255) * scrollProgress);
    const g2 = Math.round(240 - (240 - 250) * scrollProgress);
    const b2 = Math.round(245 - (245 - 255) * scrollProgress);
    
    const r3 = Math.round(255);
    const g3 = Math.round(250);
    const b3 = Math.round(255);
    
    return `linear-gradient(to bottom, rgb(${r1}, ${g1}, ${b1}), rgb(${r2}, ${g2}, ${b2}), rgb(${r3}, ${g3}, ${b3}))`;
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        margin: 0,
        padding: 0,
        overflow: "hidden",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      {/* Hero Section */}
      <div
        style={{
          position: "relative",
          minHeight: "100vh",
          width: "100%",
          overflow: "hidden",
        }}
      >
        {/* Background Image */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            overflow: "hidden",
            zIndex: 0,
          }}
        >
          <img
            src={heroBg}
            alt="Background"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "brightness(0.6)",
            }}
          />
        </div>

        {/* Header */}
        <header
          style={{
            position: "relative",
            zIndex: 10,
            width: "90%",
            maxWidth: "1200px",
            backgroundColor: "#ff8c00",
            padding: "0.75rem 2rem",
            margin: "2rem auto 0 auto",
            borderRadius: "2rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          }}
        >
          <button
            onClick={redirectToSite}
            style={{
              background: "transparent",
              color: "#fff",
              fontSize: "1.25rem",
              fontWeight: "600",
              border: "none",
              cursor: "pointer",
              textDecoration: "none",
              transition: "text-decoration 0.2s",
            }}
            onMouseEnter={(e) => {
              e.target.style.textDecoration = "underline";
              e.target.style.textUnderlineOffset = "4px";
            }}
            onMouseLeave={(e) => {
              e.target.style.textDecoration = "none";
            }}
          >
            Home
          </button>
        </header>

        {/* Content */}
        <main
          style={{
            position: "relative",
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            height: "calc(100vh - 128px)",
            maxWidth: "60rem",
            padding: "2rem",
          }}
        >
          <h1
            style={{
              fontSize: "6rem",
              fontWeight: "bold",
              color: "#fff",
              lineHeight: "1.1",
              marginBottom: "1rem",
              textShadow: "2px 2px 8px rgba(0,0,0,0.5)",
            }}
          >
            I am a Sample
            <br />
            Website
          </h1>
          <p
            style={{
              fontSize: "2rem",
              color: "#fff",
              lineHeight: "1.5",
              marginBottom: "3rem",
              textShadow: "1px 1px 4px rgba(0,0,0,0.4)",
            }}
          >
            I'm a Sample Website, Create me exactly as I am. <br />
            Don't Do any Mistakes.
          </p>
          <button
            onClick={redirectToSite}
            style={{
              backgroundColor: "#dc66e4ff",
              color: "#000000ff",
              padding: "1.5rem 4rem",
              borderRadius: "2rem",
              fontSize: "1.75rem",
              fontWeight: "700",
              cursor: "pointer",
              border: "none",
              boxShadow: "0 6px 16px rgba(0,0,0,0.3)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#3abd80ff";
              e.target.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#da6de2ff";
              e.target.style.transform = "scale(1)";
            }}
          >
            Get Started
          </button>
        </main>
      </div>
      
      {/* DataTable Section - with horizontal scrolling animation */}
      <div 
        ref={dataSectionRef}
        style={{ 
          width: '100%',
          minHeight: '100vh',
          background: calculateBackgroundColor(),
          padding: '2rem 0 6rem',
          position: 'relative',
          transition: 'background 0.5s ease'
        }}
      >
        <h1 style={{ 
          fontSize: '1.5rem',
          fontWeight: '500',
          color: '#333333',
          textAlign: 'center',
          marginBottom: '2rem',
          position: 'sticky',
          top: 0,
          backgroundColor: 'rgba(255, 230, 230, 0.9)',
          padding: '1rem 0',
          zIndex: 10
        }}>
          Sample Numbers
        </h1>
        
        {/* Data Table Container */}
        <div style={{ 
          maxWidth: '1200px',
          margin: '0 auto',
          paddingLeft: '1rem',
          paddingRight: '1rem'
        }}>
          {rows.map((row) => (
            <div key={row.id} style={{ marginBottom: '2rem' }}>
              <h2 style={{ 
                textAlign: 'center',
                fontSize: '1.125rem',
                fontWeight: '500',
                color: '#333333',
                marginBottom: '1rem'
              }}>
                {row.label}
              </h2>
              
              {/* Horizontal scrolling container with animation */}
              <div style={{ 
                overflow: 'hidden',
                position: 'relative',
                width: '100%',
                height: '160px',
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                borderRadius: '0.5rem',
                padding: '0.5rem',
                border: '2px dashed #ff8c00'
              }}>
                <div style={{ 
                  display: 'flex',
                  position: 'absolute',
                  left: 0,
                  transform: calculateTransform(row.id),
                  transition: 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  willChange: 'transform'
                }}>
                  {/* Unit Label Card */}
                  <div style={{ 
                    backgroundColor: '#e5e7eb',
                    width: '280px',
                    height: '120px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: '1.5rem',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    transform: `scale(${calculateScale()})`,
                    opacity: calculateOpacity(),
                    borderRadius: '60px',
                    border: '1px solid #d1d5db'
                  }}>
                    <div style={{ color: '#6b7280', fontSize: '1.25rem', fontWeight: '500' }}>Unit</div>
                  </div>
                  
                  {/* Data Value Cards */}
                  {row.values.map((value, index) => (
                    <div key={index} style={{ 
                      backgroundColor: 'white',
                      width: '280px',
                      height: '120px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginRight: '1.5rem',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                      transform: `scale(${calculateScale(index + 1)})`,
                      opacity: calculateOpacity(index + 1),
                      borderRadius: '60px',
                      border: '1px solid #e5e7eb'
                    }}>
                      <div style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center' }}>{value}</div>
                      <div style={{ color: '#9ca3af', fontSize: '0.9rem', textAlign: 'center', marginTop: '0.25rem' }}>Unit</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
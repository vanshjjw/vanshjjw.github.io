import React, { useState, useEffect } from 'react';
import '../Resume.css';
import { LocationIcon, RightArrowIcon } from '../../../assets/Icons';

// Helper function to format subtitle with line breaks
const formatSubtitle = (subtitle) => {
    if (!subtitle) return null;
    return subtitle.split('\n').map((line, index) => (
        <div key={index} className="subtitle-line">
            {line}
        </div>
    ));
};

// Helper function to format text with line breaks and underlines
const formatTextWithLineBreaksAndUnderlines = (text) => {
    // Split text into paragraphs
    return text.split('\n\n').map((paragraph, index) => (
        <React.Fragment key={index}>
            {index > 0 && <br />}
            {/* Process bold formatting within each paragraph */}
            {paragraph.split(/(\*\*.*?\*\*)/).map((part, i) => {
                if (part.startsWith('**') && part.endsWith('**')) {
                    // Handle bold text with semi-bold weight
                    return <span key={i} style={{ fontWeight: 550 }}>{part.slice(2, -2)}</span>;
                }
                return part;
            })}
        </React.Fragment>
    ));
};

// Simplified Experience Card Component with internal hover state
const ExperienceCard = ({ item, isConnected, isConnectable, onExpand, onHover }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const hasDescription = item.description && item.description.trim().length > 0;
    
    // Update parent when expanded state changes
    useEffect(() => {
        if (onExpand && hasDescription) {
            onExpand(item.id, isExpanded);
        }
    }, [isExpanded, item, hasDescription, onExpand]);
    
    // Prepare title with optional link
    const title = item.website ? (
        <a 
            href={item.website} 
            target="_blank" 
            rel="noopener noreferrer" 
            onClick={(e) => e.stopPropagation()}
            className="card-title-link"
        >
            {item.title}
        </a>
    ) : (
        item.title
    );
    
    // Handle mouse enter/leave with custom hover logic
    const handleMouseEnter = () => {
        setIsHovered(true);
        if (onHover) onHover(item.id, true);
    };
    
    const handleMouseLeave = () => {
        setIsHovered(false);
        if (onHover) onHover(item.id, false);
    };
    
    // Determine if card should appear highlighted
    const shouldHighlight = isConnected || isHovered;
    
    return (
        <div 
            className={`card-wrapper ${shouldHighlight ? 'connected' : ''}`}
            id={`experience-${item.id}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {isConnectable && (isConnected || isHovered) && <div className="connection-dot connection-dot-left"></div>}
            <div 
                className={`resume-card ${isExpanded ? 'expanded' : ''} ${!hasDescription ? 'no-description' : ''}`} 
                onClick={() => hasDescription && setIsExpanded(!isExpanded)}
            >
                <div className="card-content">
                    <h3 className="card-title">{title}</h3>
                    <div className="card-subtitle">
                        {formatSubtitle(item.subtitle)}
                    </div>
                    <div className="card-meta">
                        {item.location && 
                        <div className="card-location"><LocationIcon />{item.location}</div>
                        }
                        <div className="card-dates">{item.dates}</div>
                    </div>
                    {hasDescription && (
                        <div className="card-expand-indicator">
                            <RightArrowIcon />
                        </div>
                    )}
                </div>
            </div>
            
            {hasDescription && isExpanded && (
                <div className="card-description-container">
                    <div className="card-description">
                        {formatTextWithLineBreaksAndUnderlines(item.description)}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ExperienceCard; 
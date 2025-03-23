import React, { useState, useEffect } from 'react';
import '../Resume.css';
import { LocationIcon, RightArrowIcon } from '../../../assets/Icons';

// Helper function to format text with line breaks
const formatTextWithLineBreaks = (text) => {
    return text.split('\n\n').map((paragraph, index) => (
        <React.Fragment key={index}>
            {index > 0 && <br />}
            {paragraph}
        </React.Fragment>
    ));
};

// Helper function to format subtitle with line breaks
const formatSubtitle = (subtitle) => {
    if (!subtitle) return null;
    return subtitle.split('\n').map((line, index) => (
        <div key={index} className="subtitle-line">
            {line}
        </div>
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
    }, [isExpanded, item.id, hasDescription, onExpand]);
    
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
            className="card-wrapper" 
            id={`experience-${item.id}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {isConnectable && shouldHighlight && <div className="connection-dot connection-dot-left"></div>}
            <div 
                className={`resume-card ${isExpanded ? 'expanded' : ''} ${shouldHighlight ? 'connected' : ''} ${!hasDescription ? 'no-description' : ''}`} 
                onClick={() => hasDescription && setIsExpanded(!isExpanded)}
            >
                <div className="card-content">
                    <h3 className="card-title">{title}</h3>
                    <div className="card-subtitle">
                        {formatSubtitle(item.subtitle)}
                    </div>
                    <div className="card-meta">
                        <div className="card-location"><LocationIcon />{item.location}</div>
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
                        {formatTextWithLineBreaks(item.description)}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ExperienceCard; 
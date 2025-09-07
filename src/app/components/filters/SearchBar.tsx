'use client';
import { useState } from "react";
import { Search } from "lucide-react";


const SearchBar = ({width, placeholder} : {width: number | string, placeholder: string}) => {

    const [searchTerm, setSearchTerm] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    const containerStyle: React.CSSProperties = {
        position: "relative",
        width: typeof width === 'string' ? width : width,
        height: "50px",
        border: `2px solid ${isFocused ? '#3b82f6' : '#e5e7eb'}`,
        borderRadius: '40px',
        display: 'flex',
        alignItems: 'center',
        transition: 'border-color 0.2s ease',
        backgroundColor: 'white',
        minWidth: '200px', // Minimum width to prevent too much shrinking
    }


    const inputStyle: React.CSSProperties = {
        flex: 1,
        height: '100%',
        border: 'none',
        outline: 'none',
        fontSize: '18px',
        padding: '0 16px',
        backgroundColor: 'transparent'
    }

    const iconStyle: React.CSSProperties = {
        padding: '0 16px',
        color: '#6b7280',
        cursor: 'pointer',
        flexShrink: 0, // Prevent icon from shrinking
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const handleSearch = () => {
        // Add your search functionality here
        console.log('Searching for:', searchTerm);
    };

    return (
        <>
        <div className="relative flex flex-col">
            <div style={containerStyle}>
                <input
                    type="text"
                    style={inputStyle}
                    placeholder={placeholder}
                    value={searchTerm}
                    onChange={handleInputChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className="text-neutral-700 font-spaceGrotesk"
                />
                <div style={iconStyle} onClick={handleSearch}>
                    <Search size={20} />
                </div>
            </div>
        </div>
        </>
    );

}

export default SearchBar;
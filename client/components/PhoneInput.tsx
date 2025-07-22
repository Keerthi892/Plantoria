import React, { useState, useEffect } from 'react';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

interface Country {
  code: string;
  name: string;
  flag: string;
  dialCode: string;
}

const countries: Country[] = [
  { code: 'US', name: 'United States', flag: '🇺🇸', dialCode: '+1' },
  { code: 'IN', name: 'India', flag: '🇮🇳', dialCode: '+91' },
  { code: 'GB', name: 'United Kingdom', flag: '🇬🇧', dialCode: '+44' },
  { code: 'CA', name: 'Canada', flag: '🇨🇦', dialCode: '+1' },
  { code: 'AU', name: 'Australia', flag: '🇦🇺', dialCode: '+61' },
  { code: 'DE', name: 'Germany', flag: '🇩🇪', dialCode: '+49' },
  { code: 'FR', name: 'France', flag: '🇫🇷', dialCode: '+33' },
  { code: 'JP', name: 'Japan', flag: '🇯🇵', dialCode: '+81' },
  { code: 'CN', name: 'China', flag: '🇨🇳', dialCode: '+86' },
  { code: 'BR', name: 'Brazil', flag: '🇧🇷', dialCode: '+55' },
  { code: 'MX', name: 'Mexico', flag: '🇲🇽', dialCode: '+52' },
  { code: 'IT', name: 'Italy', flag: '🇮🇹', dialCode: '+39' },
  { code: 'ES', name: 'Spain', flag: '🇪🇸', dialCode: '+34' },
  { code: 'RU', name: 'Russia', flag: '🇷🇺', dialCode: '+7' },
  { code: 'KR', name: 'South Korea', flag: '🇰🇷', dialCode: '+82' },
];

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  required?: boolean;
}

export function PhoneInput({
  value,
  onChange,
  placeholder = "Enter phone number",
  className,
  disabled = false,
  required = false
}: PhoneInputProps) {
  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[1]); // Default to India
  const [phoneNumber, setPhoneNumber] = useState('');

  // Parse the value to extract country code and phone number
  useEffect(() => {
    if (value) {
      const country = countries.find(c => value.startsWith(c.dialCode));
      if (country) {
        setSelectedCountry(country);
        setPhoneNumber(value.substring(country.dialCode.length));
      } else {
        setPhoneNumber(value);
      }
    }
  }, []);

  // Format phone number (remove non-digits)
  const formatPhoneNumber = (input: string): string => {
    return input.replace(/\D/g, '');
  };

  // Validate phone number length
  const isValidPhoneNumber = (number: string): boolean => {
    const digits = formatPhoneNumber(number);
    return digits.length >= 10 && digits.length <= 15;
  };

  const handleCountryChange = (countryCode: string) => {
    const country = countries.find(c => c.code === countryCode);
    if (country) {
      setSelectedCountry(country);
      const fullNumber = country.dialCode + phoneNumber;
      onChange(fullNumber);
    }
  };

  const handlePhoneNumberChange = (input: string) => {
    const formattedNumber = formatPhoneNumber(input);
    setPhoneNumber(formattedNumber);
    const fullNumber = selectedCountry.dialCode + formattedNumber;
    onChange(fullNumber);
  };

  return (
    <div className={`flex space-x-2 ${className}`}>
      {/* Country Selector */}
      <Select value={selectedCountry.code} onValueChange={handleCountryChange} disabled={disabled}>
        <SelectTrigger className="w-[140px]">
          <SelectValue>
            <div className="flex items-center space-x-2">
              <span>{selectedCountry.flag}</span>
              <span className="text-sm">{selectedCountry.dialCode}</span>
            </div>
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {countries.map((country) => (
            <SelectItem key={country.code} value={country.code}>
              <div className="flex items-center space-x-2">
                <span>{country.flag}</span>
                <span className="text-sm">{country.dialCode}</span>
                <span className="text-xs text-muted-foreground truncate">{country.name}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Phone Number Input */}
      <Input
        type="tel"
        value={phoneNumber}
        onChange={(e) => handlePhoneNumberChange(e.target.value)}
        placeholder={placeholder}
        className="flex-1"
        disabled={disabled}
        required={required}
        maxLength={15}
      />
    </div>
  );
}

// Hook for phone number validation
export function usePhoneValidation(phoneNumber: string) {
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!phoneNumber) {
      setIsValid(false);
      setError(null);
      return;
    }

    // Check if it starts with a valid country code
    const country = countries.find(c => phoneNumber.startsWith(c.dialCode));
    if (!country) {
      setIsValid(false);
      setError('Please select a valid country code');
      return;
    }

    // Extract the phone number part
    const numberPart = phoneNumber.substring(country.dialCode.length);
    const digits = numberPart.replace(/\D/g, '');

    if (digits.length < 10) {
      setIsValid(false);
      setError('Phone number must be at least 10 digits');
      return;
    }

    if (digits.length > 15) {
      setIsValid(false);
      setError('Phone number cannot exceed 15 digits');
      return;
    }

    setIsValid(true);
    setError(null);
  }, [phoneNumber]);

  return { isValid, error };
}

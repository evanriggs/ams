'use client';

import { InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes, ReactNode } from 'react';

interface BaseFieldProps {
  label: string;
  error?: string;
  required?: boolean;
  className?: string;
}

interface InputFieldProps extends BaseFieldProps, Omit<InputHTMLAttributes<HTMLInputElement>, 'className'> {
  type?: 'text' | 'email' | 'tel' | 'number' | 'password';
}

interface TextareaFieldProps extends BaseFieldProps, Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'className'> {
  rows?: number;
}

interface SelectFieldProps extends BaseFieldProps, Omit<SelectHTMLAttributes<HTMLSelectElement>, 'className'> {
  options: { value: string; label: string }[];
  placeholder?: string;
}

const baseInputStyles = `
  w-full px-4 py-3 rounded-lg border border-gray-300 
  bg-white text-gray-900 placeholder-gray-400
  transition-all duration-200
  focus:border-ocean-mid focus:ring-2 focus:ring-ocean-light focus:outline-none
  disabled:bg-gray-100 disabled:cursor-not-allowed
`;

const errorStyles = 'border-red-500 focus:border-red-500 focus:ring-red-200';

export function InputField({ 
  label, 
  error, 
  required, 
  className = '',
  type = 'text',
  ...props 
}: InputFieldProps) {
  return (
    <div className={`mb-4 ${className}`}>
      <label className="block text-sm font-medium text-navy mb-2">
        {label}
        {required && <span className="text-coral ml-1">*</span>}
      </label>
      <input
        type={type}
        className={`${baseInputStyles} ${error ? errorStyles : ''}`}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${props.id}-error` : undefined}
        {...props}
      />
      {error && (
        <p id={`${props.id}-error`} className="mt-1 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}

export function TextareaField({ 
  label, 
  error, 
  required, 
  className = '',
  rows = 4,
  ...props 
}: TextareaFieldProps) {
  return (
    <div className={`mb-4 ${className}`}>
      <label className="block text-sm font-medium text-navy mb-2">
        {label}
        {required && <span className="text-coral ml-1">*</span>}
      </label>
      <textarea
        rows={rows}
        className={`${baseInputStyles} resize-none ${error ? errorStyles : ''}`}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${props.id}-error` : undefined}
        {...props}
      />
      {error && (
        <p id={`${props.id}-error`} className="mt-1 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}

export function SelectField({ 
  label, 
  error, 
  required, 
  className = '',
  options,
  placeholder = 'Select an option',
  ...props 
}: SelectFieldProps) {
  return (
    <div className={`mb-4 ${className}`}>
      <label className="block text-sm font-medium text-navy mb-2">
        {label}
        {required && <span className="text-coral ml-1">*</span>}
      </label>
      <select
        className={`${baseInputStyles} ${error ? errorStyles : ''} appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%230369a1%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px] bg-[right_16px_center] bg-no-repeat pr-10`}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${props.id}-error` : undefined}
        {...props}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p id={`${props.id}-error`} className="mt-1 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}

interface CheckboxFieldProps {
  label: ReactNode;
  error?: string;
  className?: string;
  id: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function CheckboxField({ 
  label, 
  error, 
  className = '',
  id,
  checked,
  onChange
}: CheckboxFieldProps) {
  return (
    <div className={`mb-4 ${className}`}>
      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          id={id}
          checked={checked}
          onChange={onChange}
          className="mt-1 w-5 h-5 rounded border-gray-300 text-ocean-mid focus:ring-ocean-light"
        />
        <span className="text-sm text-driftwood">{label}</span>
      </label>
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
}


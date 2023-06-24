import React from 'react';

const Form = () => {
  return (
    <form>
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-600">
          Word
        </label>
        <input type="text" id="name" name="name" className="mt-1 p-2 w-full border rounded-md" />
      </div>

      <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded-md">
        Translate
      </button>
    </form>
  );
};

export default Form;

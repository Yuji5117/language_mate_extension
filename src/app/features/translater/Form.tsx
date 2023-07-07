import React, { useState } from 'react';
import { translate } from './api';

const Form = () => {
  const [word, setWord] = useState('');
  const [inputText, setInputText] = useState('');

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => setInputText(e.target.value);

  return (
    <>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const res: string = await translate(inputText);
          setWord(res);
        }}
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">
            Word
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 p-2 w-full border rounded-md"
            onChange={(e) => onChangeInput(e)}
          />
        </div>

        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded-md">
          Translate
        </button>
      </form>
      <div className="pt-6 whitespace-pre-line">{word ? word : 'nothing'}</div>
    </>
  );
};

export default Form;

import Translater from '../app/features/translater/Translater';

const Popup = () => {
  document.body.className = 'w-[30rem] h-[10rem]';

  return (
    <>
      <div className="flex justify-center mt-2 text-base">Language Mate</div>
      <Translater />
    </>
  );
};

export default Popup;

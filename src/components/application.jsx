import ExpensiveComponent from './expensive-component';
import ColorGame from './color-game';

const Application = () => {
  return (
    <main className="mx-auto my-8 flex w-96 flex-col gap-8">
      <ColorGame />
      <ExpensiveComponent />
    </main>
  );
};

export default Application;

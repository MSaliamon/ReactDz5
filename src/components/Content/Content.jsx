import LoginForm from './LoginForm';
const Content = () => {
  return (
    <main className="content">
      <h1 className="title">The best pizza.<br /><span className="text-yellow">Straight out of the oven, straight to you.</span></h1>
      <p className="sub-title">👋 Welcome! Please start by telling us your name:</p>
      <LoginForm />
    </main>
  );
};
export default Content;
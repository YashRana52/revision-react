const Signup = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>📝 Signup</h2>
            <form>
                <input type="text" placeholder="Name" /><br />
                <input type="email" placeholder="Email" /><br />
                <input type="password" placeholder="Password" /><br />
                <button>Signup</button>
            </form>
        </div>
    );
};

export default Signup;

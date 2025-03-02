<script>import "../app.css";</script><slot></slot>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

    :global(body) {
        font-family: 'Poppins', sans-serif;
		width: 100%;
		min-height: 100vh;
		background-color: #fff;
	}

    :global(.pattern-background) {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ffffff;
        background-image: linear-gradient(#000000 1px, transparent 1px), linear-gradient(to right, #000000 1px, #ffffff 1px);
        background-size: 20px 20px;
        z-index: -1;
        opacity: 0.03;
    }
    
    :global(.pattern-fade-left) {
        position: absolute;
        top: 0;
        left: 0;
        width: 30%;
        height: 100%;
        background: linear-gradient(to right, #ffffff, transparent);
        z-index: -1;
    }
    
    :global(.pattern-fade-right) {
        position: absolute;
        top: 0;
        right: 0;
        width: 30%;
        height: 100%;
        background: linear-gradient(to left, #ffffff, transparent);
        z-index: -1;
    }
    
    :global(.pattern-fade-top) {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 25%;
        background: linear-gradient(to bottom, #ffffff, transparent);
        z-index: -1;
    }
    
    :global(.pattern-fade-bottom) {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 25%;
        background: linear-gradient(to top, #ffffff, transparent);
        z-index: -1;
    }
</style>
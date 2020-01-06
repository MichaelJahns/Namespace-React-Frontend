import React, { Component } from "react";
import '../resources/css/footer.css';


export default class Footer extends Component {

    render() {
        return (
            <footer className="footer">
                <main>
                    <section>
                        <div>
                            <h4> Discover Namespace </h4>
                            <span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac quam lacus. Donec consequat, orci quis tempor tincidunt, felis lacus interdum magna, sit amet bibendum metus lacus et arcu. </span>
                        </div>
                        <div>
                            <h4> Make Namespace Yours </h4>
                            <span>Nulla tortor ex, sagittis ut mi ac, sollicitudin placerat velit. Mauris justo orci, sodales eu libero ut, porttitor rutrum sem.</span>
                        </div>
                        <div>
                            <h4> Become a Member </h4>
                            <span> Aenean posuere, neque quis imperdiet facilisis, est metus lobortis justo, id tempus nunc ex sit amet mi. Nam sagittis commodo blandit. Nulla iaculis sit amet orci.</span>
                        </div>
                    </section>
                    <nav>
                        <h3> Namespace </h3>
                        <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

                        <div>
                            <p> By Michael Jahns </p>
                            <a href="https://github.com/MichaelJahns"> Github </a>
                        </div>
                    </nav>
                </main>
            </footer >

        );
    }
}

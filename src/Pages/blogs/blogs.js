import React from 'react';

const blogs = () => {
    return (
        <div>
            <div className='pt-3'>
                <h2>1.Difference between SQL and NoSQL</h2>
                <p><b>Answer :</b> The five critical differences between SQL vs NoSQL are: <br />


                    *SQL databases are relational, NoSQL databases are non-relational. <br />
                    *SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data. <br />
                    *SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. <br />
                    *SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. <br />
                    *SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
            </div>
            <div>
                <h2>2. Difference between JS and nodeJS
                </h2>
                <p><b>Answer :</b> Difference between Nodejs and JavaScript : <br />
                    Javascript is a programming language that is used for writing scripts on the website. NodeJS is a Javascript runtime environment. <br />
                    Javascript can only be run in the browsers.	We can run Javascript outside the browser with the help of NodeJS.  <br />
                    It is basically used on the client-side.	It is mostly used on the server-side. <br />
                    Javascript is capable enough to add HTML and play with the DOM. Nodejs does not have capability to add HTML tags.</p>
            </div>
            <div>
                <h2>3.When to use node JS and when to use mongodb.</h2>
                <p className="m-4"><b>Answer:</b> Any project needs a programming environment and a runtime library that offers you basic programming tools/support and can compile and/or interpret your code. Nodejs is such as tool for the Javascript programming language.So, if you want to write some kind of stand-alone program or server in Javascript, then you can use nodejs for it. <br />
                    If your application needs the ability to persistently store data in a way that you can efficiently query or update it later, then you would typically use some form of database. There are dozens of popular databases. MongoDB is one such database.</p>
            </div>
        </div>
    );
};

export default blogs;
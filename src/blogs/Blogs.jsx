import useSettitle from "../Hooks/useSettitle";


const Blogs = () => {
    useSettitle('blogs')
    return (
        <div className="bg-slate-300">
            <div className="p-6">
                <h1 className="text-xl text-black">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                <p className="text-black mt-3"> There are lots of questions/answers about this topic on SO, but regarding the refresh token the answer are not clear.

                    Access token and refresh token should not be stored in the local/session storage, because they are not a place for any sensitive data. Hence I would store the access token in a httpOnly cookie (even though there is CSRF) and I need it for most of my requests to the Resource Server anyway.

                    But what about the refresh token? I cannot store it in a cookie, because (1) it would be send with every request to my Resource Server as well which makes it vulnerable to CSRF too and (2) it would send expose both access/refresh token with an identical attack vector.</p>
            </div>
            <div className="p-6">
                <h1 className="text-xl text-black">Compare SQL and NoSQL databases?</h1>
                <p className="text-black mt-3">At a high level, NoSQL and SQL databases have many similarities. In addition to supporting data storage and queries, they both also allow one to retrieve, update, and delete stored data. However, under the surface lie some significant differences that affect NoSQL versus SQL performance, scalability, and flexibility.</p>
            </div>
            <div className="p-6">
                <h1 className="text-xl text-black">What is express js? What is Nest JS?</h1>
                <p className="text-black mt-3">Express is a minimalist and flexible framework that is easy to use and has a large community of developers. NestJS, on the other hand, is a newer framework that provides additional features such as dependency injection, a modular architecture, and an intuitive CLI.NestJS is a framework for developing modern server-side applications in Node. js. It is built on top of Express, a popular server framework for Node. js, and provides a robust set of features for building efficient, scalable, and enterprise-grade applications.</p>
            </div>
            <div className="p-6">
                <h1 className="text-xl text-black">What is MongoDB aggregate and how does it work?</h1>
                <p className="text-black mt-3">Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.As with many other database systems, MongoDB allows you to perform a variety of aggregation operations. These allow you to process data records in a variety of ways, such as grouping data, sorting data into a specific order, or restructuring returned documents, as well as filtering data as one might with a query.</p>
            </div>
        </div>
    );
};

export default Blogs;
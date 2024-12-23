import React from "react";

const Loading = () => {
    return (
        <section className="fixed inset-0 flex items-center justify-center flex-col bg-gray-900 gap-10 z-50">
            <div className="w-32 aspect-square border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
            <div className="text-white text-3xl border-b-2 border-orange-500">Vaibhav Rana</div>
        </section>
    );
};

export default Loading;

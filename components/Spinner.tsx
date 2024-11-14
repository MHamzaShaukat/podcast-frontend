'use client';

const SpinningLoader = (): JSX.Element => {

    return (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
            <div className='flex flex-col items-center'>
                <div className="rounded-md h-12 w-12 border-4 border-t-4 border-rose-500 animate-spin  mb-4"></div>
                <p className="text-white">Loading...</p>
            </div>
        </div>

    );
};

export default SpinningLoader;
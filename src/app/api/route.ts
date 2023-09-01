import {NextRequest, NextResponse } from 'next/server';

export const config = {
    runtime: 'edge',
};

const handler = (req: NextRequest) => {
    return NextResponse.json({
        name: `Hello, from ${req.url} I'm now on Edge Function!` 
    });
};

export default handler;

// export default function handler(req:any, res:any) {
//     res.status(200).json ({name: "seth"})
// }
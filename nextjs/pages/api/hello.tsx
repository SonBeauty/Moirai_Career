// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import React from "react";

interface handlerProps{
  req: any;
  res: any;
}

const handler: React.FC<handlerProps> = ({req, res}) => {
  res.status(200).json({ name: 'John Doe' })
}

export default handler;
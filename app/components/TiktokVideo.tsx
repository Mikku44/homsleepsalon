interface IVideo {
    src : string
}

export default function TiktokVideo ({
    src
}:Readonly<IVideo>) {

  return (
    <div className="w-full h-full bg-amber-100">
      <video controls className="w-full h-full object-cover" src={src}></video>
    </div>
  )
}

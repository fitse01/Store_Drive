export default async function album() {
    const response = await fetch("https://jsonplaceholder.typicode.com/albums");
    if(!response.ok) throw new Error("failed to fech jsonplaceholder data ");

    const albums = await response.json();
    console.log(albums)
    return (
        <div className="grid grid-cols-2 ">
            {
                albums.map((album:{id:number , title:string }) => (
                    <div key={album.id} className="bg-slate-900 shadow-md rounded-lg p-4 ">
                        <h3 className="text-lg font-bold m-2">Album Title : {album.title}</h3>
                        <p className="text-lg font-bold m-2">Album ID :{album.id}</p>

                    </div>
                ))
            }
        </div>
    )
} 
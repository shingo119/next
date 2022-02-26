import Layout from "../components/Layout"
import Input from "../components/Input"
import {useState} from "react";
import { db } from "../src/firebase";
import { collection, addDoc } from "firebase/firestore";
import {
  getStorage,
  ref,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";

function Upload() {
    const [title, setTitle] = useState();
    const [date, setDate] = useState();
    const [url, setUrl] = useState();
    const [text, setText] = useState();
    const [image, setImage] = useState();

    const handleSubmit = () => {
        const storage = getStorage();
        const storageRef = ref(storage, `image/${image.name}`);
        const uploadTask = uploadBytesResumable(storageRef, image);
        uploadTask.on(
            'state_changed',
            (snapshot) => {
                console.log(snapshot);
            },
            (error) => {
                console.log(error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    try {
                        const postsCollectionRef = collection(db, "posts");
                        addDoc(postsCollectionRef, {
                        title: title,
                        date: date,
                        url: url,
                        text: text,
                        imageUrl: downloadURL,
                        });
                        } catch (e) {
                            console.error("Error adding document: ", e);
                        }
                })
            }
        );

        //格納する場所
        // const postsCollectionRef = collection(db, "posts");
        // addDoc(postsCollectionRef, {
        //     title: title,
        //     date: date,
        //     url: url,
        //     text: text,
        // });
        // alert('投稿が完了しました');
    };


    return (
        <Layout>
            <div className="w-full max-w-2xl px-5 py-10 m-auto mt-10 bg-white rounded-lg shadow">
                <div className="mb-6 text-3xl font-light text-center text-gray-800">
                    投稿する
                </div>
                <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">
                    <Input placeholder="タイトル" setFunc={setTitle} />
                    <Input placeholder="日付" setFunc={setDate} />
                    <Input placeholder="url" setFunc={setUrl} />

                    <div className="col-span-2 lg:col-span-1">
                        <div className=" relative ">
                            <input type="file" onChange={(e) => setImage(e.target.files[0])} />
                        </div>
                    </div>
                    <div className="col-span-2">
                        <label className="text-gray-700">
                            <textarea
                                className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                placeholder="今日何があった？"
                                rows="5"
                                cols="40"
                                onChange={(e) => setText(e.target.value)}
                            ></textarea>
                        </label>
                    </div>
                    <div className="col-span-2 text-right">
                        <button
                            type="submit"
                            className="py-2 px-4  bg-blue-400 hover:bg-blue-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                            onClick={handleSubmit}
                        >
                            投稿
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Upload;
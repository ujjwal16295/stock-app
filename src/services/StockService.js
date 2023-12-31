import { db } from "./FirebaseConfig";
import { collection,getDocs,getDoc, doc ,orderBy,query} from "firebase/firestore";

const ref= collection(db,"stocks")
class StockService{

    getAllStock=()=>{

        return getDocs(query(ref, orderBy('index')))
    }

    getOneStock=(id)=>{
        const stockDoc=doc(db,"books",id)
        return getDoc(stockDoc)
    }

}

export default new StockService()
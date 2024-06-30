interface SubCategory {
    title: string;
    id: string;
  }
  
  interface Category {
    title: string;
    subCategory?: SubCategory[];
    id: string;
  }
  
export  interface MenuProps {
    categories: Category[];
    isLoading:boolean;
  }


 
export   type MenuItemProps = {
    subCategory: SubCategory[];
  };
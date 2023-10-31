import Title from "../../Components/Title";

const AddProduct = () => {

    const handleAddProduct = e => {
        e.preventDefault();
        const form = e.target;
        
        const data = {
            title: form.title.value || "not given",
            product_iamge: form.image.value || "not given",
            product_price: form.price.value || "not given",
            product_category: form.category.value || "not given",
            product_description: form.description.valu || "not given"

        }
        console.log(data)

    }
    return (

        <div className="py-10">
            <Title>Add our productst</Title>
            <form onSubmit={handleAddProduct}>
                <div className="flex gap-5">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-black dark:text-white">Title</span>
                        </label>
                        <input
                            type="text"
                            name="title"
                            placeholder="Enter Product Title"
                            className="input input-bordered "
                            required
                        />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-black dark:text-white">Phoduct Image</span>
                        </label>
                        <input
                            type="text"
                            name="image"
                            placeholder="Enter Product Url"
                            className="input input-bordered "
                            required
                        />
                    </div>

                </div>
                <div className="flex gap-5">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-black dark:text-white">Price</span>
                        </label>
                        <input
                            type="text"
                            name="price"
                            placeholder="Enter Product Price"
                            className="input input-bordered "
                            required
                        />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-black dark:text-white">Phoduct Categories</span>
                        </label>
                        <input
                            type="text"
                            name="category"
                            placeholder="Enter Category "
                            className="input input-bordered "
                            required
                        />
                    </div>

                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-black dark:text-white">Phoduct Description</span>
                    </label>
                    <textarea
                        className="textarea textarea-bordered"
                        placeholder="Enter Product Description"
                        name="description"
                    ></textarea>

                </div>

                <div className="form-control mt-6">

                    <button className="btn btn-outline">Add Product</button>
                </div>
            </form>
        </div>


    );
};

export default AddProduct;
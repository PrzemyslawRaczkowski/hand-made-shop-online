import React from 'react';


export default class AddingProductForm extends React.Component {
    render() {
        return (
            <div>
                <form class="form-horizontal">
                    <fieldset>
                        <legend>Add product</legend>

                        <div class="form-group">
                            <label for="name" class="col-lg-2 control-label">Name</label>
                            <div class="col-lg-10">
                                <input type="text" class="form-control" id="name" placeholder="Name"/>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="price" class="col-lg-2 control-label">Price</label>
                            <div class="col-lg-10">
                                <input type="text" class="form-control" id="price" placeholder="Price"/>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="description" class="col-lg-2 control-label">Description</label>
                            <div class="col-lg-10">
                                <input type="text" class="form-control" id="description" placeholder="Description"/>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="category" class="col-lg-2 control-label">Category</label>
                            <div class="col-lg-10">
                                <input type="text" class="form-control" id="category" placeholder="Category"/>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="color" class="col-lg-2 control-label">Color</label>
                            <div class="col-lg-10">
                                <input type="text" class="form-control" id="color" placeholder="Color"/>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="material" class="col-lg-2 control-label">Material</label>
                            <div class="col-lg-10">
                                <input type="text" class="form-control" id="material" placeholder="Material"/>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="finish" class="col-lg-2 control-label">Finish</label>
                            <div class="col-lg-10">
                                <input type="text" class="form-control" id="finish" placeholder="Finish"/>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="dimensions" class="col-lg-2 control-label">Dimensions</label>
                            <div class="col-lg-10">
                                <input type="text" class="form-control" id="dimensions" placeholder="Width"/>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="width" class="col-lg-2 control-label">Width</label>
                            <div class="col-lg-10">
                                <input type="text" class="form-control" id="width" placeholder="Width"/>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="height" class="col-lg-2 control-label">Height</label>
                            <div class="col-lg-10">
                                <input type="text" class="form-control" id="height" placeholder="Height"/>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="depth" class="col-lg-2 control-label">Depth</label>
                            <div class="col-lg-10">
                                <input type="text" class="form-control" id="depth" placeholder="Depth"/>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="amount" class="col-lg-2 control-label">Amount</label>
                            <div class="col-lg-10">
                                <input type="text" class="form-control" id="amount" placeholder="Amount"/>
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-lg-10 col-lg-offset-2">
                                <button type="reset" class="btn btn-default">Cancel</button>
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    };
}

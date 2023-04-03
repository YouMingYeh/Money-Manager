const Mutation = {
  createItem: async (parent, { input }, {itemModel, pubSub}) => {
    const newItem = new itemModel(input);
    await newItem.save();
    pubSub.publish("ITEM_CREATED", {
      itemCreated: newItem,
    });
    return newItem;
  },

  updateItem: async (parent, { input }, {itemModel, pubSub}) => {
    const item = await itemModel.findOneAndUpdate(
      { id: input.id },
      {
        $set: {
          name: input.name,
          amount: input.amount,
          category: input.category,
          date: input.date,
          description: input.description,
        },
      }
    );
    const newItem = {
      id: input.id ?? item.id,
      name: input.name ?? item.name,
      amount: input.amount ?? item.amount,
      category: input.category ?? item.category,
      date: input.date ?? item.date,
      description: input.description ?? item.description,
    }
    pubSub.publish("ITEM_UPDATED", {
      itemUpdated: newItem,
    });
    return newItem;
  },
  // TODO 5.2 Define the itemDelete mutation resolver
  deleteItem: async (parent, id, {itemModel, pubSub}) =>{
    const ID = id.id
    const item = await itemModel.findOne({id: ID});

    // if (item === -1) {
    //   throw new Error('Item not found');
    // }
    
    const deletedItem = await itemModel.deleteOne({id : ID})
    console.log(deletedItem)
    return ID;
  }
  // TODO 6.3 Publish itemDeleted

  // TODO 5.2 End
  // TODO 6.3 End

};

export default Mutation;

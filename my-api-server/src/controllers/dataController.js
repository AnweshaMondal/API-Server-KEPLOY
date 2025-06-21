class DataController {
    constructor(dataModel) {
        this.dataModel = dataModel;
    }

    async getAllData(req, res) {
        try {
            const data = await this.dataModel.find();
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getDataById(req, res) {
        try {
            const data = await this.dataModel.findById(req.params.id);
            if (!data) {
                return res.status(404).json({ message: 'Data not found' });
            }
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async createData(req, res) {
        const newData = new this.dataModel(req.body);
        try {
            const savedData = await newData.save();
            res.status(201).json(savedData);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async updateData(req, res) {
        try {
            const updatedData = await this.dataModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!updatedData) {
                return res.status(404).json({ message: 'Data not found' });
            }
            res.status(200).json(updatedData);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async deleteData(req, res) {
        try {
            const deletedData = await this.dataModel.findByIdAndDelete(req.params.id);
            if (!deletedData) {
                return res.status(404).json({ message: 'Data not found' });
            }
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export default DataController;
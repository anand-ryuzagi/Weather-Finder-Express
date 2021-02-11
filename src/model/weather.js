const Weather = function(data){
    this.data = data
    this.error = []
}

Weather.prototype.validateuserinput = function(){
    if (this.data == "") {
        this.error.push('Please enter the city field')
    }
}

module.exports = Weather;
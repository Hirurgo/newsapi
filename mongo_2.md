mongoimport.exe -d frontcamp -c airlines --type csv --headerline --file "C:\Users\Mikalai_Shchakatsikhin\Desktop\airlines.csv"

## TASK 1
db.airlines.aggregate([{$group: { _id: "$class", total: { $sum: 1 }} }])

{ "_id" : "F", "total" : 140343 }
{ "_id" : "L", "total" : 23123 }
{ "_id" : "P", "total" : 5683 }
{ "_id" : "G", "total" : 17499 }


## TASK 2
db.airlines.aggregate([
    { 
        $match: {
            destCountry: { 
                $nin: ["United States"]
            }
        }
    },
    { 
        $group: { 
            _id: "$destCity",
            avgPassengers: { $avg: "$passengers" }
        }
    }, 
    {
        $sort: {avgPassengers: -1}
    }, 
    {
        $limit: 3
    }
])

{ "_id" : "Abu Dhabi, United Arab Emirates", "avgPassengers" : 8052.380952380952 }
{ "_id" : "Dubai, United Arab Emirates", "avgPassengers" : 7176.596638655462 }
{ "_id" : "Guangzhou, China", "avgPassengers" : 7103.333333333333 }

3.
db.airlines.aggregate([
    {
        $match: { destCountry: "Latvia"}
    }, 
    {
        $group: {
            _id: "$destCountry",
            carriers: { $addToSet: "$carrier" }
        }
    }
])

{ "_id" : "Latvia", "carriers" : [ "Uzbekistan Airways", "Blue Jet SP Z o o", "JetClub AG" ] }


## TASK 3
db.airlines.aggregate([
    {
        $match: {
            $or: [
                {destCountry: "Greece", originCountry: "United States"}, 
                {destCountry: "Spain", originCountry: "United States"}, 
                {destCountry: "Italy", originCountry: "United States"}
            ]
        }
    },
    {
        $group: {
            _id: "$carrier",
            total: {$sum: "$passengers"}
        }
    },
    { 
        $sort: { total: -1} 
    },
    { 
        $limit: 10
    },
    { 
        $skip : 3
    }
])

{ "_id" : "Compagnia Aerea Italiana", "total" : 280256 }
{ "_id" : "United Air Lines Inc.", "total" : 229936 }
{ "_id" : "Emirates", "total" : 100903 }
{ "_id" : "Air Europa", "total" : 94968 }
{ "_id" : "Meridiana S.p.A", "total" : 20308 }
{ "_id" : "Norwegian Air Shuttle ASA", "total" : 13344 }
{ "_id" : "VistaJet Limited", "total" : 183 }


## TASK 4
db.airlines.aggregate([
    {
        $match: { originCountry: "United States" }
    },
    {
       $group: {
            _id: {
               originCity: "$originCity",
               originState: "$originState"
            },
            totalPassengers: {$sum: "$passengers"}
        }
    },
    {
        $sort: {
            "_id.originState": 1,
            "totalPassengers": -1
        }
    },
    {
        $group: {
            _id: {
                originState: "$_id.originState"
            },
            originCity: {$first: "$_id.originCity"},
            totalPassengers: { $max: "$totalPassengers"}
        }
    },
    {
        $sort: {"_id.originState": 1 }
    },
    {
        $limit: 5
    },
    {
        $project: {
            _id: 0, 
            totalPassengers: "$totalPassengers", 
            location: { state: "$_id", city: "$originCity" }
        }
    }
])

{ "totalPassengers" : 760120, "location" : { "state" : { "originState" : "Alabama" }, "city" : "Birmingham, AL" } }
{ "totalPassengers" : 1472404, "location" : { "state" : { "originState" : "Alaska" }, "city" : "Anchorage, AK" } }
{ "totalPassengers" : 13152753, "location" : { "state" : { "originState" : "Arizona" }, "city" : "Phoenix, AZ" } }
{ "totalPassengers" : 571452, "location" : { "state" : { "originState" : "Arkansas" }, "city" : "Little Rock, AR" } }
{ "totalPassengers" : 23701556, "location" : { "state" : { "originState" : "California" }, "city" : "Los Angeles, CA" } }


## TASK 5
mongorestore -d frontcamp -c enron "C:\Users\Mikalai_Shchakatsikhin\Desktop\enroll\dump\enron\messages.bson"

Request:
db.enron.aggregate([
    {
        $unwind: "$headers.To"
    },
    {
        $group: {
            _id: { id: "$_id" },
            from: { $first: "$headers.From" },
            to: { $addToSet: "$headers.To" }
        }
    },
    { 
        $unwind : "$to"
    },
    {
        $group: {
            _id: {
                from: "$from",
                to: "$to"
            },
            count: { $sum:1 }
        }
    },
    { 
        $sort: { "count": -1} 
    },
    {
        $limit: 1
    },
    { 
        $project: {
            from: "$_id.from",
            to: "$_id.to",
            count: "$count",
            _id:0 
        }
    }
])

Response: {
    "from" : "susan.mara@enron.com",
    "to" : "jeff.dasovich@enron.com",
    "count" : 750
}
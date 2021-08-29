class SimpleCache:
    
    def __init__(self):
        self.Cache = dict()

    def get(self, key):
        return self.Cache.get(key) 
    
    def isExist(self, key):
        obj = self.Cache.get(key) 
        
        return not(obj == None)

    def set(self, key, value):
        self.Cache.update({key: value})
    

    def getAll(self):
        return self.Cache.items()
    
    def getKeys(self):
        return self.Cache.keys()
    

    def clear(self):
        self.Cache.clear()
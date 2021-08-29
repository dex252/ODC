import json
from types import SimpleNamespace

class CustomParams:
    one = 0
    two = 0
    three = 0

class CustomModule:
      
    def __init__(self):
        self.params = CustomParams()
        
    def setParams (self, params):
        print(params)
        #custom_params = json.loads(params, object_hook=lambda d: SimpleNamespace(**d))
        
        self.params.one = params["one"]
        self.params.two = params["two"]
        self.params.three = params["three"]

    def do(self, args = None):
        print('Start')
        one = self.params.one
        two = self.params.two
        three = self.params.three
        
        return one-two-three
from flask import Flask, request, jsonify
from cache import SimpleCache
import glob, os
import json 

import importlib.util

app = Flask(__name__)

cache = SimpleCache()
modules_path = "D:\__Diplom\custom_modules"

@app.route("/run", methods=["GET"])
def run_one_simple():
    
    username = request.args.get('filename')

    result = []
    for val in cache:
        print(val)
        result.append(val)

    return jsonify(result)


@app.route("/all", methods=["GET"])
def get_all():
    keys = cache.getKeys()
    return jsonify(keys)


@app.route("/run", methods=["POST"])
def run_one():
    if not request.is_json:
        return {"error": "Request must be JSON"}, 415
    
    data = request.get_json()
    
    name = data["filename"]
    params = data["params"]
    
    isExist = cache.isExist(name)
    
    if not isExist:
        AddModule(name)
        
    result = DoProcess(name, params)
        
    return str(result), 200

def DoProcess(name, params):
    module = cache.get(name)
    module.setParams(params)
    return module.do()

def AddModule(name):
    filenames = glob.glob(modules_path + './*.py')
    compare_name = modules_path + ".\\" + name + ".py"
    
    for filename in filenames:
        if (filename == compare_name):
            spec = importlib.util.spec_from_file_location(name, modules_path + "/" + name + ".py")
            foo = importlib.util.module_from_spec(spec)
            spec.loader.exec_module(foo)
            
            customModule = foo.CustomModule()
            cache.set(name, customModule)

            return
//
//  LabelExportable.swift
//  WizelineDemo
//
//  Created by Jorge R Ovalle Z on 9/6/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

import UIKit

@objc(ExportableClass)

class ExportableClass: NSObject {

  @objc func startServer(name: String)  {
      let ids = name.componentsSeparatedByString(" - ")
    print("\(ids[0]) should start the server for COD!")
  }

}

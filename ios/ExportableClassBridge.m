//
//  ExportanleClassBridge.m
//  WizelineDemo
//
//  Created by Jorge R Ovalle Z on 9/8/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>


#import "RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(ExportableClass, NSObject)

RCT_EXTERN_METHOD(startServer:(NSString *)name)

@end
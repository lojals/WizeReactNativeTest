//
//  Use this file to import your target's public headers that you would like to expose to Swift.
//


#import "RCTBridgeModule.h"






@interface RCT_EXTERN_MODULE(CalendarManager, NSObject)

RCT_EXTERN_METHOD(addEvent:(NSString *)name location:(NSString *)location date:(NSNumber *)date)

@end
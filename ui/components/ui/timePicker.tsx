"use client";

import React from "react";
import { TimeValue } from "react-aria";
import { TimeFieldStateOptions } from "react-stately";
import { TimeField } from "@/components/ui/timeField";

interface TimePickerProps extends TimeFieldStateOptions<TimeValue> {
	className?: string;
}

export const TimePicker = React.forwardRef<HTMLDivElement, Omit<TimePickerProps, "locale">>((props, forwardedRef) => {
	return <TimeField {...props} />;
});

TimePicker.displayName = "TimePicker";

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Image,
} from "react-native";
import { useSelector } from "react-redux";
import { selectIsRTL } from "store/reducers/auth-persist.reducer";
import Colors from "utils/Colors.util";
import Font from "utils/Font.util";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "utils/Dimensions.util";
import { ActiveStar, InactiveStar } from "assets/svgs";
import StarImage from "assets/images/Pngs/star.png";

const RatingModal: React.FC<{ visible: boolean; onClose: () => void; onSubmit: (rating: number, feedback: string) => void }> = ({
  visible,
  onClose,
  onSubmit,
}) => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const isRTL = useSelector(selectIsRTL);

  const renderStars = () => {
    return Array(5)
      .fill(0)
      .map((_, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => setRating(index + 1)}
          style={styles.starContainer}
        >
          {rating > index ? (
            <ActiveStar width={moderateScale(24)} height={moderateScale(24)} />
          ) : (
            <InactiveStar
              width={moderateScale(24)}
              height={moderateScale(24)}
            />
          )}
        </TouchableOpacity>
      ));
  };

  const handleSubmit = () => {
    onSubmit(rating, feedback);
    setIsSubmitted(true);
  };

  const closeConfirmation = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <>
      {/* Rating Modal */}
      <Modal transparent visible={visible && !isSubmitted} animationType="fade">
        <View style={styles.overlay}>
          <View style={styles.modalContainer}>
            <View style={styles.headerRow}>
              <Text style={[styles.title, Font.medium]}>
                {isRTL ? "قيم العرض" : "Rate Offer"}
              </Text>
              <TouchableOpacity onPress={onClose} >
                <Text style={styles.closeText}>×</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.ratingRow}>
              <Text style={[styles.label, Font.regular]}>
                {isRTL ? "تقييمك:" : "Your Rating:"}
              </Text>
              <View style={styles.starRatingContainer}>{renderStars()}</View>
            </View>
            <TextInput
              style={[styles.input, Font.regular]}
              placeholder={isRTL ? "شارك تجربتك" : "Provide your experience"}
              placeholderTextColor={Colors.LIGHT_TEXT}
              multiline
              value={feedback}
              onChangeText={setFeedback}
            />
            <TouchableOpacity
              style={styles.submitButton}
              onPress={handleSubmit}
            >
              <Text style={[styles.submitText, Font.medium]}>
                {isRTL ? "إرسال" : "Submit"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Confirmation Modal */}
      <Modal transparent visible={isSubmitted} animationType="fade">
        <View style={styles.overlay}>
          <View style={styles.modalContainer}>
            {/* Centered text and absolute close button */}
            <View style={styles.confirmationHeader}>
              <Text style={[styles.confirmationText, Font.medium]}>
                {isRTL ? "شكراً لتقييمك" : "Thank you for rating this offer"}
              </Text>
              <TouchableOpacity onPress={onClose} style={styles.absoluteCloseButton}>
                <Text style={styles.closeText}>×</Text>
              </TouchableOpacity>
            </View>
            <Image source={StarImage} style={styles.starImage} />
            <TouchableOpacity
              style={styles.closeConfirmation}
              onPress={closeConfirmation}
            >
              <Text style={[styles.closeConfirmationText, Font.medium]}>
                {isRTL ? "إغلاق" : "Close"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "80%",
    backgroundColor: Colors.WHITE,
    borderRadius: moderateScale(10),
    padding: moderateScale(16),
    alignItems: "center",
    justifyContent: "space-between",
    height: verticalScale(300),
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: verticalScale(10),
    width: "100%",
  },
  title: {
    fontSize: moderateScale(24),
    color: Colors.BLACK,
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: verticalScale(10),
    width: "100%",
  },
  label: {
    fontSize: moderateScale(14),
    color: Colors.BLACK,
  },
  starRatingContainer: {
    flexDirection: "row",
  },
  starContainer: {
    marginHorizontal: horizontalScale(5),
  },
  input: {
    width: "100%",
    height: verticalScale(100),
    borderWidth: 1,
    borderColor: Colors.GRAY,
    borderRadius: moderateScale(8),
    padding: moderateScale(10),
    textAlignVertical: "top",
    color: Colors.BLACK,
    marginBottom: verticalScale(10),
  },
  submitButton: {
    width: "100%",
    backgroundColor: Colors.JOOD_BLUE,
    paddingVertical: verticalScale(10),
    borderRadius: moderateScale(8),
    alignItems: "center",
  },
  closeConfirmation: {
    width: "100%",
    backgroundColor: Colors.GRAY,
    paddingVertical: verticalScale(10),
    borderRadius: moderateScale(8),
    alignItems: "center",
  },
  submitText: {
    fontSize: moderateScale(16),
    color: Colors.WHITE,
  },
  closeConfirmationText: {
    fontSize: moderateScale(16),
    color: Colors.BLACK,
  },
  starImage: {
    width: moderateScale(120),
    height: moderateScale(120),
    marginBottom: verticalScale(10),
  },
  confirmationHeader: {
    width: "100%",
    position: "relative",
    marginBottom: verticalScale(10),
  },
  confirmationText: {
    fontSize: moderateScale(18),
    color: Colors.BLACK,
    textAlign: "center",
  },
  absoluteCloseButton: {
    position: "absolute",
    right: horizontalScale(-10),
    top: verticalScale(-5),
    padding: horizontalScale(5),
  },
  closeText: {
    fontSize: moderateScale(20),
    color: Colors.BLACK,
  },
});

export default RatingModal;

import React from "react";
import { Layout } from "@core/components/layout/layout";
import { ContentWrapper } from "@core/components/content-wrapper/content-wrapper";
import { Title } from "@core/components/typography/title/title";
import { Subtitle } from "@core/components/typography/subtitle/subtitle";
import {
    DiagnosisLayout,
    LeftDiagnosisLayout,
    RightDiagnosisLayout
} from "@feats/diagnosis/components/diagnosis-layout/diagnosis-layout";
import { PickedImage } from "@core/components/picked-image/picked-image";
import { Button, Divider, FileUpload } from "react-untitled-ui";
import { PredictionResults } from "@feats/diagnosis/components/prediction-results/prediction-results";
import { useBrainCancer } from "@feats/diagnosis/pages/brain-cancer/use-brain-cancer";

export type BrainCancerProps = {
    
}

export const BrainCancer: React.FC<BrainCancerProps> = () => {
    const { file, clearFile, onPick, loading, handleButtonClick, predictions } = useBrainCancer()
    
    return <Layout>
        <ContentWrapper>
            <Title>Диагностика рака мозга</Title>
            <Subtitle>Автоматическая диагностика рака по МРТ головного мозга</Subtitle>
            <DiagnosisLayout>
                <LeftDiagnosisLayout>
                    {
                        file
                            ? <PickedImage onClick={ clearFile } file={ file }/>
                            : <FileUpload
                                onDrop={ onPick }
                                buttonText="Нажмите"
                                text="чтобы загрузить МРТ"
                                subText="Изображение в JPEG или JPG"/>
                    }
                    <Button
                        loading={ loading }
                        disabled={ !file }
                        onClick={ handleButtonClick }
                        fullWidth>
                        Диагностировать
                    </Button>
                </LeftDiagnosisLayout>
                <Divider type="vertical"/>
                <RightDiagnosisLayout>
                    <PredictionResults
                        predictions={ predictions }
                        notFoundText={ !file
                            ? "Сначала вам необходимо загрузить МРТ"
                            : "Нажмите на кнопку Диагностировать, чтобы получить результаты"
                        }/>
                </RightDiagnosisLayout>
            </DiagnosisLayout>
        </ContentWrapper>
    </Layout>
}